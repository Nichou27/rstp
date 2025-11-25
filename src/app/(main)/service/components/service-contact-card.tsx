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
import { formatPrice } from "@/lib/utils";
import { Clock, Heart, Mail, MessageCircle, Phone, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ServiceContactCardProps {
  price: number;
  providerName: string;
  responseTime: string;
  contactInfo?: {
    phone?: string;
    email?: string;
  };
}

export default function ServiceContactCard({
  price,
  providerName,
  responseTime,
  contactInfo,
}: ServiceContactCardProps) {
  const [showContactModal, setShowContactModal] = useState(false);

  const formattedPrice = formatPrice(price);

  return (
    <div>
      <Card className="sticky top-24 md:border md:shadow-sm">
        <CardContent className="pt-6">
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl md:text-4xl font-bold">
                {formattedPrice}
              </span>
              <span className="text-muted-foreground">/ clase</span>
            </div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
              Primera clase gratis
            </span>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => setShowContactModal(true)}
              className="w-full font-semibold text-lg h-12"
              size="lg"
            >
              Contactar
            </Button>
            <Button variant="outline" className="w-full h-12" size="lg">
              <Heart className="mr-2 text-muted-foreground" size={18} />
              Guardar servicio
            </Button>
          </div>

          <Separator className="my-6" />

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Shield size={16} className="text-green-600 shrink-0" />
              <span className="text-muted-foreground">
                Pago seguro protegido
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-blue-600 shrink-0" />
              <span className="text-muted-foreground">
                Respuesta aprox: <strong>{responseTime}hs.</strong>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Contactar a {providerName}</DialogTitle>
            <DialogDescription>
              Elige tu método de comunicación preferido.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-2">
            <Button
              variant="outline"
              className="w-full justify-start gap-4 h-auto py-4 hover:bg-muted/50 transition-colors"
              onClick={() => alert("Ir al chat interno...")}
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <MessageCircle className="text-blue-600" size={20} />
              </div>
              <div className="text-left">
                <div className="font-medium">Enviar mensaje</div>
                <div className="text-xs text-muted-foreground">
                  Chat dentro de la plataforma
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-4 h-auto py-4 hover:bg-muted/50 transition-colors"
              asChild
            >
              <Link
                href={
                  contactInfo?.phone
                    ? `https://wa.me/${contactInfo.phone}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div className="text-left">
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">
                    Respuesta rápida
                  </div>
                </div>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-4 h-auto py-4 hover:bg-muted/50 transition-colors"
              asChild
            >
              <Link
                href={contactInfo?.email ? `mailto:${contactInfo.email}` : "#"}
              >
                <div className="bg-red-100 p-2 rounded-full">
                  <Mail className="text-red-600" size={20} />
                </div>
                <div className="text-left">
                  <div className="font-medium">Email</div>
                  <div className="text-xs text-muted-foreground">
                    Para consultas formales
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
