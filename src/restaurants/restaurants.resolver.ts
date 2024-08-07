import { Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entity";


@Resolver(of => Restaurant) // of => Restaurant not mandatory
export class RestaurantResolver {
    @Query(returns => Restaurant)
    myRestaurant() {
        return true; 
    }
}