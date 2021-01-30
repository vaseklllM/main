import React, { ReactElement } from "react"
import BancCard from "../../BancCard"
import { Button, Row, Typography } from "antd"
import { txt } from "../../../../utils"
import classes from "./style.module.scss"

interface Props {
  className?: string
}

export default function AddMonoBank(props: Props): ReactElement {
  const { className } = props
  const { Text } = Typography

  return (
    <BancCard className={txt.join([className])} title='Монобанк'>
      <Row>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nam ipsum
          laudantium pariatur repudiandae assumenda, dicta incidunt quis. Quo molestias
          quia iure ex fugit unde modi inventore ipsam eius mollitia.
        </Text>
      </Row>
      <Button type='primary'>Підключити</Button>
    </BancCard>
  )
}
