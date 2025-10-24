const TICKETS_KEY = 'ticketapp_tickets_v1';

export function loadTickets(){
  try { return JSON.parse(localStorage.getItem(TICKETS_KEY)) || []; } catch { return []; }
}

export function saveTickets(tickets){
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}
