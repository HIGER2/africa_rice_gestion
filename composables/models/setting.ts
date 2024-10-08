import type { SettingType, StepType } from "../types/models";


export class Setting {
  settingId: number;
  label: string;
  name: string;
  value: string;
  constructor({
    settingId,
    label,
    name,
    value,
  }: SettingType) {
    this.settingId = settingId;
    this.label = label;
    this.name = name;
    this.value = value;
  }
}




export class Step {
  stepId: number;
  name: string;
  message: string;
  messageFr: string;
  active: string;
  dateFrom: string;
  dateTo: string;
  sent: string;
  constructor({
    stepId,
    name,
    message,
    messageFr,
    active,
    dateFrom,
    dateTo,
    sent,
  }: StepType) {
    this.stepId = stepId;
    this.name = name;
    this.message = message;
    this.messageFr = messageFr;
    this.active = active;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.sent = sent;
  }
}