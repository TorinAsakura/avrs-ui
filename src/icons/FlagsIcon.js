import * as flags from './flags'

const Flags = ({ name, ...props }) => {
  const flag = flags[name]

  if (flag) {
    return flag(props)
  }

  return null
}

export default Flags
