export default class EventDTO {
  eventOver;
  eventUnder;
  eventColor;
  eventType;

  constructor(eventOver, eventUnder, eventColor, eventType) {
    this.eventOver = eventOver;
    this.eventUnder = eventUnder;
    this.eventColor = eventColor;
    this.eventType = eventType;
  }

  toJson = () => {
    return {
      eventOver: this.eventOver,
      eventUnder: this.eventUnder,
      eventColor: this.eventColor,
      eventType: this.eventType,
    };
  };

  static fromJson = (json) => {
    return new EventDTO(
      json["eventOver"],
      json["eventUnder"],
      json["eventColor"],
      json["eventType"]
    );
  };
}
