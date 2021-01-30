import React, { ReactElement } from "react"
import BancCard from "../../BancCard"
import { Button } from "antd"

interface Props {
  className?: string
}

export default function AddMonoBank(props: Props): ReactElement {
  const { className } = props

  return (
    <BancCard className={className} title='Монобанк'>
      <Button type='primary'>Підключити</Button>
    </BancCard>
  )
}
