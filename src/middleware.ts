import { type NextRequest } from "next/server";
import { updateSession } from "../utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
// Por ahora dejo estas rutas genéricas protegidas, luego las cambio por las específicas
export const config = {
  matcher: [
    "/contratar/:path*",
    "/perfil/:path*",
    "/mensajes/:path*",
    "/configuracion/:path*",
  ],
};
