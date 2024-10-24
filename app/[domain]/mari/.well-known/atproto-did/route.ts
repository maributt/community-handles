import { type NextRequest } from "next/server"

import { prisma } from "@/lib/db"

export const GET = async (
  _req: NextRequest,
  { params }: { params: { domain: string; handle: string } }
) => {
  const { did } = await prisma.user.findFirstOrThrow({
    where: { handle: params.handle, domain: { name: params.domain } },
  })
  return new Response("did:plc:3pgry4sv53vhukivczsjj3kb", {
    headers: {
      "content-type": "text/plain",
    },
  })
}
