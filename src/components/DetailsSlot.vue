<template>
  <f-div padding="medium" state="secondary">
    <f-table-schema
      v-if="tableData"
      sticky-cell-background="secondary"
      variant="underlined"
      :data="tableData"
      sticky-header
      :show-search-bar="false"
    ></f-table-schema>
  </f-div>
</template>
<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { FTableSchemaData, FTableSchemaDataRow } from "@ollion/flow-table";
import { onMounted, onUnmounted, ref } from "vue";
const tableData = ref<FTableSchemaData | null>(null);

onMounted(() => {
  const rows: FTableSchemaDataRow[] = [];
  for (let index = 0; index < 20; index++) {
    rows.push({
      id: faker.string.alpha(1),
      data: {
        id: { value: index + 1 },
        firstName: { value: faker.person.middleName() },
        lastName: { value: faker.person.lastName() },
        email: { value: faker.internet.email() },
        jobTitle: { value: faker.person.jobTitle() },

        address: {
          value: `${faker.location.buildingNumber()} ${faker.location.streetAddress()} ${faker.location.city()} ${faker.location.country()} ${faker.location.zipCode()}`,
        },
      },
    });
  }
  tableData.value = {
    rows: rows,
    header: {
      id: {
        value: "Employee ID",
      },
      firstName: {
        value: "First Name",
      },
      lastName: {
        value: "last Name",
      },
      email: {
        value: "Email",
      },
      jobTitle: {
        value: "Title",
      },
      address: {
        value: "Address",
        width: "300px",
      },
    },
  };

  console.log("Details slot mounted");
});

onUnmounted(() => {
  console.log("Details slot unmounted");
});
</script>
