import React, { ReactElement } from "react"
import { MainPageHeader } from "../Headers"
import { Card } from "antd"
import classes from "./style.module.scss"
import { Typography } from "antd"
import Link from "next/link"

interface Props {}

export default function Categories({}: Props): ReactElement {
  const { Title } = Typography

  return (
    <>
      <MainPageHeader title='Категорії' />
      <div className={classes.categories}>
        <Link href='/finance'>
          <a>
            <Card.Grid className={classes.cart_item}>
              <Title level={5}>Фінанси</Title>
            </Card.Grid>
          </a>
        </Link>
      </div>
    </>
  )
}
