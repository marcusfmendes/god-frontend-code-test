import { Card, CardContent, Spacer, Text } from "vcc-ui"
import { Car } from "../types/car.interface"

interface CardProps {
    car: Car;
}
export default function CarCard(props : CardProps){
    return( 
    <Card href={"/learn/"+ props.car?.id}>
    <CardContent>
        <Text subStyle="emphasis">{props.car?.bodyType}</Text> 
        <Text variant="ootah">{props.car?.modelName}</Text>
        <Spacer />
        <Text>This is a is a link that will take you to volvocars.com</Text>
    </CardContent>
  </Card>
    )
}