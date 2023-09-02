import { PrismaClient as PrismaClientCatalog } from "./prisma/catalog/client";
import { PrismaClient as PrismaClientTenant } from "./prisma/tenant/client";

const catalogClient = new PrismaClientCatalog({
  datasources: {
    db: {
      url: "sqlserver://localhost:1433;database=catalog;user=prisma_migrate;password=1234;trustServerCertificate=true;",
    },
  },
});
const tenantAClient = new PrismaClientTenant({
  datasources: {
    db: {
      url: "sqlserver://localhost:1433;database=tenant_a;user=prisma_migrate;password=1234;trustServerCertificate=true;",
    },
  },
});
const tenantBClient = new PrismaClientTenant({
  datasources: {
    db: {
      url: "sqlserver://localhost:1433;database=tenant_b;user=prisma_migrate;password=1234;trustServerCertificate=true;",
    },
  },
});

async function main() {
  const catalog = await catalogClient.table_a.create({
    data: {
      name: "catalog init",
    },
  });
  console.log(catalog);

  const tenantA = await tenantAClient.table_b.create({
    data: {
      title: "tenantA init",
    },
  });
  console.log(tenantA);

  const tenantB = await tenantBClient.table_b.create({
    data: {
      title: "tenantB init",
    },
  });
  console.log(tenantB);
}

main()
  .then(async () => {
    await catalogClient.$disconnect();
    await tenantAClient.$disconnect();
    await tenantBClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await catalogClient.$disconnect();
    await tenantAClient.$disconnect();
    await tenantBClient.$disconnect();
    process.exit(1);
  });
