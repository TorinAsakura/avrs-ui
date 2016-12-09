Modal
=====

```
import React, { Component } from 'react'
import Button from '../button/Button'
import Modal from './Modal'

class ModalExample extends Component {
  state = {
    show: false,
  }

  onShow = () => {
    this.setState({ show: true })
  }

  onClose = () => {
    this.setState({ show: false })
  }

  render() {
    const { show } = this.state

    return (
      <div style={{ padding: 30 }}>
        <Button onClick={this.onShow}>
          Show
        </Button>
        {show ?
          (
            <Modal onClose={this.onClose}>
              <div style={{ background: '#ffffff', padding: 20 }}>
                adsfasd
              </div>
            </Modal>
          ) : null}
      </div>
    )
  }
}

export default ModalExample
```
