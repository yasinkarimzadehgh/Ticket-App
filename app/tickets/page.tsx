import React from "react";

import prisma from "@/prisma/db";
import DataTable from "./DataTable";

async function Tickets() {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
}

export default Tickets;
