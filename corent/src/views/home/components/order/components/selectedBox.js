//列表上面的选择框
import React from 'react';
import {
    Form,
    DatePicker,
    InputNumber,
    Radio,
    Select
} from "antd";
import { handleStateData, type, serviceName } from "@/mock/orderCol.js";
import homecss from "@/static/css/home.module.scss";
const { RangePicker } = DatePicker;
const { Option } = Select;
class Selected extends React.Component {
    state = {}
    render() {
        return (
            <Form layout="inline">
                <Form.Item label={'处理时间'} className={homecss["file"]}>
                    <RangePicker />
                </Form.Item>
                <Form.Item label={'金额范围'} className={homecss["file"]} >
                    <InputNumber min={10000} max={200000} />&nbsp;&nbsp;-&nbsp;&nbsp;<InputNumber min={10000} max={200000} />
                </Form.Item >
                <Form.Item label={'处理状态'} className={homecss["file"]} >
                    <Radio.Group defaultValue="all" buttonStyle="solid" >
                        <Radio.Button value='all' className={homecss["spn"]} >全部</Radio.Button>
                        {
                            handleStateData.map((item, key) => (
                                <Radio.Button value={key} key={key} className={homecss["spn"]}>{item}</Radio.Button>
                            ))
                        }
                    </Radio.Group>
                </Form.Item >
                <Form.Item label={'转单类型'} className={homecss["file"]}>
                    <Select defaultValue={-1} style={{ width: 120 }}>
                        <Option value={-1} disabled={true}>选择信用类</Option>
                        {
                            type.map((item, key) => (
                                <Option value={key} key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                </Form.Item >
                <Form.Item label={'客服名称'}className={homecss["file"]} >
                    <Select defaultValue={-1} style={{ width: 120 }}>
                        <Option value={-1} disabled={true}>请选择客服</Option>
                        {
                            serviceName.map((item, key) => (
                                <Option value={key} key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                </Form.Item >

            </Form>
        );
    }
}
Selected= Form.create()(Selected)
export default Selected;