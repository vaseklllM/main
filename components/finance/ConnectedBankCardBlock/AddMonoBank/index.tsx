import React, { ChangeEvent, ReactElement, useState } from "react"
import BancCard from "../../BancCard"
import { Button, Input, Row, Typography } from "antd"
import { txt } from "../../../../utils"
import classes from "./style.module.scss"
import Link from "next/link"
import { status } from "../../../../utils/status"
import InputActiveIcon from "./InputActiveIcon"

interface Props {
  className?: string
}

export default function AddMonoBank(props: Props): ReactElement {
  const { className } = props
  const { Text } = Typography
  const [token, setToken] = useState("")
  const [isActiveToken, setIsActiveToken] = useState(status.no_data)

  const goMonoBtnText = "Получити токен"
  const inputPlaceholder = "Токен"

  async function changeToken(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setToken(value)
    if (value.length === 44) {
      setIsActiveToken(status.loading)

      setTimeout(() => {
        setIsActiveToken(status.successful)
      }, 1000)
    } else if (isActiveToken !== status.no_data) {
      setIsActiveToken(status.no_data)
    }
  }

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
      <Row className={classes.token_input_row}>
        <Input
          className={classes.token_input}
          placeholder={inputPlaceholder}
          onChange={changeToken}
          value={token}
        />
        <InputActiveIcon
          className={classes.token_status_icon}
          isActiveToken={token !== "" && isActiveToken}
        />
      </Row>
    </BancCard>
  )
}
