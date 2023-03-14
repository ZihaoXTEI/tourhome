import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { EntireFilterWrapper } from './style'
import filterData from "@/assets/data/filter-data.json"

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle (item) {
    const newItems = [...selectItems]
    // 已存在，则移除
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else {  // 否则，添加
      newItems.push(item)
    }

    setSelectItems(newItems)
  }

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {
          filterData.map((item) => {
            return (
              <div
                className={classNames('item', { active: selectItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter