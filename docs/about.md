---
id: about
title: Do que se trata o VisualOrc?
sidebar_label: Sobre
hide_title: false
---

asdasdas  
asdasdas

![](../static/img/logo.svg)

# Title
## ola
### tudo bem=
**istto é um texto**

~~The world is flat.~~

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media 

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote. 

### My Great Heading {#custom-id}

### lista:

**item 1**
* item 2
* item 3

:::note
  
nota

:::

| col 1 | col 2 | col 3
| - | - | - |
| col 1 | col 2 | col 3
| col 1 | col 2 | col 3
| col 1 | col 2 | col 3

```sh
    sh cenas.sh
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}
  >
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>;



:::note

isto é importante

:::

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.


## Videos
import 'video-react/dist/video-react.css';
import {Player} from 'video-react';

<Player
  playsInline
  poster="/img/visualorc.svg"
  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
/>
