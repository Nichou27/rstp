"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { provider, service } from "@/lib/placeholder-data";
import { Clock, Heart, Mail, MessageCircle, Phone, Shield } from "lucide-react";
import { useState } from "react";

export default function ServiceContactCard() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div>
      <Card className="sticky top-24">
        <CardContent className="pt-6">
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold">
                ${service.price.toLocaleString()}
              </span>
              <span className="text-muted-foreground">/ clase</span>
            </div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              Primera clase gratis
            </span>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => setShowContactModal(true)}
              className="w-full"
              size="lg"
            >
              Contactar
            </Button>

            <Button variant="outline" className="w-full" size="lg">
              <Heart className="mr-2" size={18} />
              Guardar servicio
            </Button>
          </div>

          <Separator className="my-6" />

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Shield size={16} className="text-green-600" />
              <span className="text-muted-foreground">
                Pago seguro protegido
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-blue-600" />
              <span className="text-muted-foreground">
                Respuesta en {provider.responseTime}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contactar a {provider.name}</DialogTitle>
            <DialogDescription>
              Elige cómo quieres comunicarte con el proveedor
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-4 h-auto py-4"
            >
              <MessageCircle className="text-blue-600" size={24} />
              <div className="text-left">
                <div className="font-medium">Enviar mensaje</div>
                <div className="text-sm text-muted-foreground">
                  Chatea directamente
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-4 h-auto py-4"
            >
              <Phone className="text-green-600" size={24} />
              <div className="text-left">
                <div className="font-medium">WhatsApp</div>
                <div className="text-sm text-muted-foreground">
                  Contacto rápido
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-4 h-auto py-4"
            >
              <Mail className="text-red-600" size={24} />
              <div className="text-left">
                <div className="font-medium">Email</div>
                <div className="text-sm text-muted-foreground">
                  Enviar consulta formal
                </div>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
