import { Address } from "./address";

export interface Event {
  uuid: string;
  name: string;
  date: string;
  time: string;
  description: string;
  category: string;
  category_display: string;
  status: string;
  status_display: string;
  image: string;
  image_url: string;
  ticket_value: string;
  half_ticket_value: string;
  ticket_quantity: number;
  half_ticket_quantity: number;
  tickets_sold: number;
  tickets_available: number;
  half_tickets_available: number;
  tickets_verified: number;
  address: Address;
}
