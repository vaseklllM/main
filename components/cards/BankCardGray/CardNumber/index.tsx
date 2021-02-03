import { ReactElement } from "react"
import { txt } from "../../../../utils"
import classes from "./style.module.scss"

interface Props {
  className?: string
  number?: string
  iban?: string
  isFop?: boolean
}

export default function CardNumber(props: Props): ReactElement {
  const { className, number, iban, isFop } = props

  if (isFop && iban) {
    return <span className={txt.join([className, classes.fop])}>{iban}</span>
  }

  return (
    <span className={txt.join([className, classes.card_number])}>
      {getNumber(number)}
    </span>
  )
}

function getNumber(num: string) {
  var foo = num.split("-").join("")
  if (foo.length > 0) {
    foo = foo.match(new RegExp(".{1,4}", "g")).join("-")
  }
  return foo
}
