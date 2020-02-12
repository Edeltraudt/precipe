import React from "react";

import { Checkbox } from '../components/core/checkbox/checkbox'
import { Headline } from '../components/core/headline/headline'
import { Icon } from '../components/core/icon/icon'
import { IconGroup } from '../components/core/icon-group/icon-group'
import { Input } from '../components/core/input/input'

export default {
  title: "Core"
};

export const CheckBox = () => <Checkbox isChecked={true} id="1" label="Checkbox" />;
export const Headline2 = () => <Headline level="2">Headline Level 2</Headline>;
export const PlainUserIcon = () => <Icon name="Laureena" />;
export const GroupOfIcons = () => <IconGroup name="Laureena" groupId={1} />;
export const InputField = () => <Input type="text" placeholder="Text input" id="input" />;
