export const statusCodes = [
  { etape: "Envoi", code: "100", en: "Sent", fr: "Envoyé", tracking: "Envoyé" },
  { etape: "Envoi", code: "101", en: "In Transit", fr: "En transit", tracking: "En transit" },
  { etape: "Envoi", code: "102", en: "Arrived at Hub", fr: "Arrivé au hub", tracking: "Arrivé au hub" },
  { etape: "Livraison", code: "200", en: "Delivered", fr: "Livré", tracking: "Livré" },
  {
    etape: "Livraison",
    code: "201",
    en: "Out for Delivery",
    fr: "En cours de livraison",
    tracking: "En cours de livraison",
  },
  {
    etape: "Livraison",
    code: "202",
    en: "Delivery Attempted",
    fr: "Tentative de livraison",
    tracking: "Tentative de livraison",
  },
  {
    etape: "Retour",
    code: "300",
    en: "Returned to Sender",
    fr: "Retourné à l'expéditeur",
    tracking: "Retourné à l'expéditeur",
  },
  {
    etape: "Retour",
    code: "301",
    en: "In Transit (Return)",
    fr: "En transit (retour)",
    tracking: "En transit (retour)",
  },
  { etape: "Exception", code: "400", en: "Exception", fr: "Exception", tracking: "Exception" },
  { etape: "Exception", code: "401", en: "Delayed", fr: "Retardé", tracking: "Retardé" },
  { etape: "Exception", code: "402", en: "Lost", fr: "Perdu", tracking: "Perdu" },
  // Add more status codes as needed
]

