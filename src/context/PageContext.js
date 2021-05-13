import React, { createContext } from 'react'

const defaultContextValue = {
  data: {},
  set: () => {},
}

const PageContext = createContext(defaultContextValue)

class PageContextProvider extends React.Component {
  constructor(props) {
    super(props)

    this.setData = this.setData.bind(this)
    this.state = {
      data: props.data,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(newData)
  }

  render() {
    return (
      <PageContext.Provider value={this.state}>
        {this.props.children}
      </PageContext.Provider>
    )
  }
}

export { PageContext as default, PageContextProvider }
