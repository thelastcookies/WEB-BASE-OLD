import {ResponseBody} from "../../../src/hooks/axios";
import {DataModel} from "../../../src/api/main-data/model/types";

export default eventHandler(async (event): Promise<ResponseBody<DataModel>> => {
    const body = await readBody(event);
    console.log(body);
    // const id = getRouterParam(event, 'id');
    // const data: DataModel = {
    //
    // };
    return {
        code: 200,
        msg: '获取成功',
        // data,
    }
});
