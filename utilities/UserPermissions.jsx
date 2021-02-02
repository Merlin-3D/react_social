import constants from 'expo-constants'

import * as Permissions from 'expo-permissions'


class UserPermission {
    getCamerapermission = async () => {
        if(constants.platform.android || constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)

            if(status != "granted") {
                alert("we use permission tu use your camera roll")
            }
        }
    }
}

export default new UserPermission()