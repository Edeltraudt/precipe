import React from "react";

import { Button } from '../components/core/button/button'
import { Checkbox } from '../components/core/checkbox/checkbox'
import { Headline } from '../components/core/headline/headline'
import { Icon } from '../components/core/icon/icon'
import { IconGroup } from '../components/core/icon-group/icon-group'
import { Input } from '../components/core/input/input'
import { Tag } from '../components/core/tag/tag'

export default {
  title: "Core"
};

export const PlainButton = () => <Button>Plain Button</Button>;
export const DangerButton = () => <Button style="danger">Danger Button</Button>;
export const FilterTag = () => <Tag id="filter-tag">Filter Tag</Tag>;
export const CheckBox = () => <Checkbox isChecked={true} id="1" label="Checkbox" />;
export const Headline2 = () => <Headline level="2">Headline Level 2</Headline>;
export const Headline3 = () => <Headline level="3">Headline Level 3</Headline>;
export const PlainUserIcon = () => <Icon name="Laureena" />;
export const GroupOfIcons = () => <IconGroup name="Laureena" groupId={1} />;
export const InputField = () => <Input type="text" placeholder="Text input" id="input" />;
