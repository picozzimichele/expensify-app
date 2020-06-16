import React from "react"
import { ExpenseSummary } from "../../components/ExpenseSummary"
import { shallow } from "enzyme"

test("should correctly render ExpenseSummary with one expense", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={245}/>)
    expect(wrapper).toMatchSnapshot()
})

test("should correctly render ExpenseSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={12345}/>)
    expect(wrapper).toMatchSnapshot()
})