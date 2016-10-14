import moment from 'moment'

export const isDomainEquals = (nextDomain, domain) =>
  nextDomain.every((item, index) => moment(item).diff(moment(domain[index])) === 0)
