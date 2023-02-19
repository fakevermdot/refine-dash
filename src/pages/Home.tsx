import {useList} from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { PieChart, PropertyReferrals , TotalRevenue, PropertyCard, TopAgent} from "components";


const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color= "#11142d" >
        Dashboard
      </Typography>
      <Box mt= "20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
        title="Properties for Sale"
        value= {648}
        series={[72, 25]}
        colors={['#275be8', '#c4e8ef']}/>
         <PieChart
        title="Properties for Rent"
        value= {555}
        series={[60, 25]}
        colors={['#275be8', '#c4e8ef']}/>
         <PieChart
        title="Total customers"
        value= {120}
        series={[70, 12]}
        colors={['#275be8', '#c4e8ef']}/>
         <PieChart
        title="Total for Cities"
        value= {550}
        series={[72, 25]}
        colors={['#275be8', '#c4e8ef']}/>
      </Box>

      <Stack mt="25px" width="100%" direction={{xs: 'column', lg:'row'}}>
        <TotalRevenue/>
        <PropertyReferrals/>

      </Stack>
    </Box>
  )
}

export default Home