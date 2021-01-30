import React, { ReactElement, useEffect, useRef, useState } from "react"
import { Col, Button, Tooltip, Typography } from "antd"
import classes from "./style.module.scss"
import { txt } from "../../../utils"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import IStore from "../../../store/interface"
import { connect } from "react-redux"

interface Props {
  title?: string
  className?: string
  children?: ReactElement | ReactElement[]
  windowWidth: number
}

const ANIMATION_TIME = 700

function BancCard(props: Props): ReactElement {
  const { title = "card title", className, children, windowWidth } = props
  const { Title } = Typography
  const [isAdd, setIsAdd] = useState(false)
  const [isShowBody, setIsShowBody] = useState(false)
  const [bodyHeight, setBodyHeight] = useState(0)
  const [bodyWidth, setBodyWidth] = useState(0)

  const bodyRef = useRef(null)
  const mainRef = useRef(null)

  useEffect(() => {
    if (windowWidth !== 0) {
      if (bodyRef.current && isAdd) {
        setBodyWidth(mainRef.current.offsetWidth)
        setTimeout(() => {
          setBodyHeight(bodyRef.current.offsetHeight)
        }, ANIMATION_TIME / 2)
      } else {
        setBodyWidth(0)
        setBodyHeight(0)
      }
    }
  }, [isShowBody, isAdd, windowWidth])

  function changeIsAdd() {
    if (isAdd) {
      setIsAdd(false)
      setTimeout(() => {
        setIsShowBody(false)
      }, ANIMATION_TIME)
    } else {
      setIsShowBody(true)
      setIsAdd(true)
    }
  }

  const t = ANIMATION_TIME / 1000

  return (
    <div className={classes.main} ref={mainRef}>
      <Col
        className={txt.join([classes.card, isAdd && classes.active_card, className])}
        style={{
          transition: `width ${t}s, height ${t}s ease-in-out`,
          height: `${bodyHeight + 84}px`,
          width: `${bodyWidth + 280}px`,
        }}
      >
        <div>
          <div className={classes.title}>
            <Title level={5} className={classes.title_text}>
              {title}
            </Title>
            <Tooltip title={isAdd ? "Приховати" : "Підключити"}>
              <Button
                onClick={changeIsAdd}
                type='primary'
                shape='circle'
                icon={isAdd ? <MinusOutlined /> : <PlusOutlined />}
              />
            </Tooltip>
          </div>
          {isShowBody && <div className={classes.hr} />}
          {isShowBody && (
            <div className={classes.body} ref={bodyRef}>
              {children}
            </div>
          )}
        </div>
      </Col>
    </div>
  )
}

const mapState = ({ global }: IStore) => ({ windowWidth: global.width })

export default connect(mapState)(BancCard)
