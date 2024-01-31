<template>
  <f-div width="100%" height="100%" state="default">
    <f-table>
      <f-trow slot="header">
        <f-tcell>First Name</f-tcell>
        <f-tcell>Last Name</f-tcell>
        <f-tcell>Email</f-tcell>
        <f-tcell>Job Title</f-tcell>
        <f-tcell>Address</f-tcell>
      </f-trow>

      <f-trow
        v-for="row in tableData"
        :key="row.id"
        @toggle-row="(e) => handleToggleRow(e, row)"
      >
        <f-tcell>{{ row.firstName }}</f-tcell>
        <f-tcell>{{ row.lastName }}</f-tcell>
        <f-tcell>{{ row.email }}</f-tcell>
        <f-tcell>{{ row.jobTitle }}</f-tcell>
        <f-tcell>{{ row.address }}</f-tcell>
        <f-div slot="details" width="100%" max-height="300px">
          <DetailsSlot v-if="row.isOpen"
        /></f-div>
      </f-trow>
    </f-table>
  </f-div>
</template>
<script setup lang="ts">
import DetailsSlot from "./components/DetailsSlot.vue";
import { faker } from "@faker-js/faker";
import { onMounted, ref } from "vue";

type Row = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  isOpen: boolean;
  address: string;
};
const generateTableData: () => Row[] = () => {
  const tableData: Row[] = [];
  for (let index = 0; index < 20; index++) {
    const row = {
      id: index,
      firstName: faker.person.middleName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      jobTitle: faker.person.jobTitle(),
      isOpen: false,
      address: `${faker.location.buildingNumber()} ${faker.location.streetAddress()} ${faker.location.city()} ${faker.location.country()} ${faker.location.zipCode()}`,
    };
    tableData.push(row);
  }
  return tableData;
};

const tableData = ref<Row[]>();

onMounted(() => {
  tableData.value = generateTableData();
});

const handleToggleRow = (e: CustomEvent<{ value: boolean }>, row: Row) => {
  row.isOpen = e.detail.value;
};
</script>
