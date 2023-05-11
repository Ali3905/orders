import React from 'react'
import { 
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'

const Orders = () => {

  return (
    <TableContainer component={Paper}>
        <Table arial-aria-label='simple table' stickyHeader>
            <TableHead  >
                <TableRow sx={{"": {border: 0}}}>
                    <TableCell align='center'>Order Id</TableCell>
                    <TableCell align='center'>Customer</TableCell>
                    <TableCell align='center'>Order</TableCell>
                    <TableCell align='center'>Delivery Date</TableCell>
                    <TableCell align='center'>Delivery Price</TableCell>
                    <TableCell align='center'>Payment Method</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {data.map((ele)=>{
                           return <TableRow
                            key={ele.id}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                            >
                                <TableCell sx={{maxWidth: 200}} align='center'>{ele.id}</TableCell>
                                
                                <TableCell align='center'>{ele.customer}</TableCell>
                                <TableCell align='center'>{ele.order}</TableCell>
                                <TableCell align='center'>{ele.delivery_date}</TableCell>
                                <TableCell align='center'>{ele.price}</TableCell>
                                <TableCell align='center'>{ele.card_type}</TableCell>
                            </TableRow>
                        })
                    }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const data = [{
    "id": "01H05SV501",
    "customer": "Suzi Chilcott",
    "order": "Cinnamon - Ground",
    "delivery_date": "3/27/2022",
    "price": "$244.06",
    "card_type": "Visa"
  }, {
    "id": "01H05SV501",
    "customer": "Carilyn Harberer",
    "order": "Soup - Canadian Pea, Dry Mix",
    "delivery_date": "11/27/2022",
    "price": "$175.10",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV501",
    "customer": "Maddie Polgreen",
    "order": "Sachet",
    "delivery_date": "11/28/2023",
    "price": "$469.58",
    "card_type": "Master-card"
  }, {
    "id": "01H05SV50",
    "customer": "Barnie Margiotta",
    "order": "Cleaner - Bleach",
    "delivery_date": "7/5/2023",
    "price": "$974.03",
    "card_type": "Visa"
  }, {
    "id": "01H05SV501",
    "customer": "Billie Roots",
    "order": "Smoked Paprika",
    "delivery_date": "2/18/2022",
    "price": "$351.35",
    "card_type": "Visa"
  }, {
    "id": "01H05SV501",
    "customer": "Marnie Spears",
    "order": "Cup - 6oz, Foam",
    "delivery_date": "2/4/2022",
    "price": "$904.34",
    "card_type": "Visa"
  }, {
    "id": "01H05SV501",
    "customer": "Julienne Lanmeid",
    "order": "Chinese Foods - Cantonese",
    "delivery_date": "1/22/2022",
    "price": "$680.51",
    "card_type": "Master-card"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Madlin Jovovic",
    "order": "Juice - Tomato, 48 Oz",
    "delivery_date": "7/26/2022",
    "price": "$462.65",
    "card_type": "Master-card"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Filide Calcraft",
    "order": "Dr. Pepper - 355ml",
    "delivery_date": "2/13/2023",
    "price": "$862.14",
    "card_type": "Visa"
  }, {
    "id": "01H05SV50",
    "customer": "Jermayne Frankema",
    "order": "Sauce - Soy Low Sodium - 3.87l",
    "delivery_date": "8/10/2023",
    "price": "$632.92",
    "card_type": "Visa"
  }, {
    "id": "01H05SV501",
    "customer": "Ebenezer Hullah",
    "order": "Juice - Pineapple, 48 Oz",
    "delivery_date": "6/7/2022",
    "price": "$374.18",
    "card_type": "Master-card"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Janith Sandford",
    "order": "Noodles - Cellophane, Thin",
    "delivery_date": "6/10/2022",
    "price": "$110.19",
    "card_type": "Visa"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Perry Loomes",
    "order": "Cookies - Fortune",
    "delivery_date": "7/29/2022",
    "price": "$553.30",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV50",
    "customer": "Jabez Greenly",
    "order": "Wine - Bouchard La Vignee Pinot",
    "delivery_date": "3/11/2022",
    "price": "$74.87",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Fabe Balnaves",
    "order": "Red Currants",
    "delivery_date": "12/1/2023",
    "price": "$229.35",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV501",
    "customer": "Steffie Dibling",
    "order": "Cloves - Whole",
    "delivery_date": "6/10/2023",
    "price": "$332.93",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV501",
    "customer": "Kathi Kiera",
    "order": "Broccoli - Fresh",
    "delivery_date": "11/5/2023",
    "price": "$144.05",
    "card_type": "Master-card"
  }, {
    "id": "01H05SV501",
    "customer": "Susanne Gillise",
    "order": "Temperature Recording Station",
    "delivery_date": "1/4/2022",
    "price": "$188.21",
    "card_type": "Visa"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Brunhilde Oslar",
    "order": "Soup - Campbells",
    "delivery_date": "6/21/2022",
    "price": "$345.24",
    "card_type": "Visa"
  }, {
    "id": "01H05SV501",
    "customer": "Angil Gregan",
    "order": "Capon - Whole",
    "delivery_date": "9/23/2023",
    "price": "$452.73",
    "card_type": "Master-card"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Anstice Hesbrook",
    "order": "Tray - Foam, Square 4 - S",
    "delivery_date": "10/30/2022",
    "price": "$527.09",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV501",
    "customer": "Sapphire Nelsey",
    "order": "Jolt Cola",
    "delivery_date": "5/5/2022",
    "price": "$798.63",
    "card_type": "Master-card"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Olag Castanie",
    "order": "Pepper - Cubanelle",
    "delivery_date": "12/13/2022",
    "price": "$521.66",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV501",
    "customer": "Braden MacCarlich",
    "order": "Wine - Magnotta - Cab Franc",
    "delivery_date": "11/29/2023",
    "price": "$980.22",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV501",
    "customer": "Carlota Chennells",
    "order": "Onions Granulated",
    "delivery_date": "5/20/2022",
    "price": "$569.70",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV4ZY",
    "customer": "Ediva Hurlestone",
    "order": "Beef - Ox Tongue, Pickled",
    "delivery_date": "6/21/2022",
    "price": "$26.30",
    "card_type": "Visa"
  }, {
    "id": "01H05SV50",
    "customer": "Kerwinn Shadfourth",
    "order": "Pepper - Cubanelle",
    "delivery_date": "8/11/2022",
    "price": "$182.61",
    "card_type": "Visa"
  }, {
    "id": "01H05SV50",
    "customer": "Elwyn Desseine",
    "order": "Nantucket - Kiwi Berry Cktl.",
    "delivery_date": "5/20/2022",
    "price": "$761.53",
    "card_type": "Master-card"
  }, {
    "id": "01H05SV501",
    "customer": "Karolina Rottery",
    "order": "Orange - Canned, Mandarin",
    "delivery_date": "1/13/2023",
    "price": "$188.30",
    "card_type": "Paypal"
  }, {
    "id": "01H05SV50",
    "customer": "Eugenia Dedrick",
    "order": "Truffle Cups - Red",
    "delivery_date": "3/21/2023",
    "price": "$561.81",
    "card_type": "Paypal"
  }]
  

export default Orders
