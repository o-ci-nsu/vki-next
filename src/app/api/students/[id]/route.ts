import { deleteStudentDb, getStudentByIdDb } from "@/db/studentDb";
import { type NextApiRequest } from "next/types";

interface Params {
  params: { id: number };
}

export async function GET(
  req: NextApiRequest,
  { params }: Params
): Promise<Response> {
  const p = await params;
  const studentId = p.id;

  const student = await getStudentByIdDb(studentId);

  if (!student) {
    return new Response(JSON.stringify({ error: "Student not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(student), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(
  req: NextApiRequest,
  { params }: Params
): Promise<Response> {
  const p = await params;
  const studentId = p.id;

  const deletedStudentId = await deleteStudentDb(studentId);

  return new Response(JSON.stringify({ deletedStudentId }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
