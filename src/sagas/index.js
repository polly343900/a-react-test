import getList from './list';

export default function* (){
    yield [
        getList()
    ]
}