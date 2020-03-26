import React from "react";

import { Button, Checkbox, Input } from "../components/core/forms";
import IconCheckbox from "../components/core/icon-checkbox";
import { Headline } from "../components/core/typography";
import { UserIcon, UserIconGroup } from "../components/user/icons";
import Tag from "../components/core/tag/tag";
import LabelValue from "../components/core/label-value";

export default {
  title: "Core"
};

export const PlainButton = () => <Button>Plain Button</Button>;
export const DangerButton = () => <Button style="danger">Danger Button</Button>;
export const FilterTag = () => <Tag id="filter-tag">Filter Tag</Tag>;
export const CheckBox = () => (
  <Checkbox isChecked={true} id="1" label="Checkbox" />
);
export const IconCheckBox = () => (
  <IconCheckbox isChecked={true} icon="pork" id="1" label="Icon Checkbox" />
);

export const PlainLabelValuePair = () => (
  <LabelValue label="Preparation Time" value="20" suffix="minutes" />
);

export const Headline2 = () => <Headline level="2">Headline Level 2</Headline>;
export const Headline3 = () => <Headline level="3">Headline Level 3</Headline>;

export const PlainUserIcon = () => <UserIcon name="Laureena" />;
export const GroupOfIcons = () => <UserIconGroup name="Laureena" groupId={1} />;
export const InputField = () => (
  <Input type="text" placeholder="Text input" id="input" />
);
