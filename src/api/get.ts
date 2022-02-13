import express from 'express'
export default express().get('/:id', (req, res) => {
  // TODO connects to item service to get details by item id
  res.send({
    id: `inv-${req?.params?.id}-000`,
    items: [
      {
        id: 'my-itm-1234',
        itemId: '',
        name: 'Diamond',
        qty: 10,
      },
    ],
  })
})
