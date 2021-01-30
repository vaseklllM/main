import React, { ReactElement } from "react"
import BancCard from "../../BancCard"
import { Button, Input, Row, Typography } from "antd"
import { txt } from "../../../../utils"
import classes from "./style.module.scss"
import Link from "next/link"

interface Props {
  className?: string
}

export default function AddMonoBank(props: Props): ReactElement {
  const { className } = props
  const { Text } = Typography

  const goMonoBtnText = "Получити токен"
  const inputPlaceholder = "Токен"

  return (
    <BancCard className={txt.join([className])} title='Монобанк'>
      <Row>
        <Text>
          Для того щоб підключити банківську карту монобанку потрібно натиснути кнопку "
          {goMonoBtnText}" і авторизуватись. Далі після авторизації натисніть
          "Активувати", скопіюйте згенерований токен та вставте в поле "{inputPlaceholder}
          ".
        </Text>
      </Row>
      <Row>
        <Link href={{ pathname: "https://api.monobank.ua/" }} passHref>
          <Button className={classes.go_bank} target='_blank' type='primary'>
            {goMonoBtnText}
          </Button>
        </Link>
      </Row>
      <Row>
        <Input className={classes.token_input} placeholder={inputPlaceholder} />
      </Row>
    </BancCard>
  )
}
