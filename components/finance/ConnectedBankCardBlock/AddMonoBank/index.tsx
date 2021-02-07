import React, { ChangeEvent, ReactElement, useState } from "react"
import BancCard from "../../BancCard"
import { Button, Input, Row, Typography } from "antd"
import { txt } from "../../../../utils"
import classes from "./style.module.scss"
import Link from "next/link"
import { status } from "../../../../utils/status"
import InputActiveIcon from "./InputActiveIcon"
import api from "../../../../api"
import { IMonobankUserData } from "../../../../api/banks/monobank/getUserInfo"
import { BankCardGray } from "../../../cards"

interface Props {
  className?: string
}

export default function AddMonoBank(props: Props): ReactElement {
  const { className } = props
  const { Text } = Typography
  const [token, setToken] = useState<string>("")
  const [isActiveToken, setIsActiveToken] = useState<status>(status.no_data)
  const [cardData, setCardData] = useState<IMonobankUserData | null>(null)

  const goMonoBtnText = "Получити токен"
  const inputPlaceholder = "Токен"

  async function changeToken(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setToken(value)
    if (value.length === 44) {
      setIsActiveToken(status.loading)

      const res = await api.finance.banks.monobank.getUserInfo(value)
      if (res.ok) {
        setCardData(res.data)
        setIsActiveToken(status.successful)
      } else {
        setIsActiveToken(status.error)
        setCardData(null)
      }
    } else if (isActiveToken !== status.no_data) {
      setIsActiveToken(status.no_data)
      setCardData(null)
    } else {
      setCardData(null)
    }
  }

  async function onSaveCards() {
    const res = await api.finance.banks.monobank.addMonobankToken(token)
    console.log(res)
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
      {cardData && (
        <div className={classes.card_data}>
          <Row>
            <Text strong>Користувач:</Text>
            <Text className={classes.user_name}>{cardData.user.name}</Text>
          </Row>
          <Row className={classes.cards_title}>
            <Text strong>Рахунки:</Text>
          </Row>
          <Row className={classes.cards_row}>
            {cardData.bankCards.map((el) => (
              <BankCardGray key={el.id} className={classes.card_item} data={el} />
            ))}
          </Row>
          <Row>
            <Button type='primary' onClick={onSaveCards}>
              Зберегти
            </Button>
          </Row>
        </div>
      )}
    </BancCard>
  )
}
