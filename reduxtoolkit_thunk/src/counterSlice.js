import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const asyncUpFetch = createAsyncThunk( 
    // createAsyncThunk는 비동기 작업 처리하는 action을 만들어준다.
    'counterSlice/asyncUpFetch', // action type
    async () => { const resp = await fetch( // 실행코드
        'https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits'
    );
    const data = await resp.json();
    return data.value;
});

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
        value: 2,
        status: 'Welcome',
    },
    reducers: { // reducers를 사용하면 toolkit이 aciton creator를 자동으로 만들어 준다.
        up: (state, action) => {
        state.value = state.value + action.payload;
        state.status = '지금은 동기적 작업중';
        },
    },
    extraReducers: (builder) => { 
        // creatAsyncThunk로 만든 비동기 작업은 action creator를 자동으로 생성하지 못하기 때문에 extraReducers에 직접 action creator를 정의한다.
        builder.addCase(asyncUpFetch.pending, (state, action) => {
        state.status = 'Loading';
        });
        builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = 'Complete';
        });
        builder.addCase(asyncUpFetch.rejected, (state, action) => {
        state.status = 'Fail';
        });
    },
});

export default counterSlice;
export const { up } = counterSlice.actions;
export { asyncUpFetch };
