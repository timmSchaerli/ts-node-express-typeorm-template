import {User} from './entity/User';
import {getManager} from "typeorm";

export const userRepository = () => {
    return getManager().getRepository(User);
}






