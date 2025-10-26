import { allSUGEvents } from './sug_events_data.js'

export default function setEvent(hosts, data = allSUGEvents){
  
  let events = []
  
  let allEvents = data;
  
  events = allEvents.filter(e => e.host.aluta === hosts)
  
  //events = allEvents.map(e => {if(e.host.aluta === hosts) return e})
  
  return events
}