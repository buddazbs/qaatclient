import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
export const NotFound = () => {
    const navigate = useNavigate();
    return (_jsx("div", Object.assign({ style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        } }, { children: _jsx(Result, { status: "404", title: "404", subTitle: "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u043E\u0441\u0435\u0442\u0438\u043B\u0438, \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.", extra: _jsx(Button, Object.assign({ type: "primary", onClick: () => navigate('/') }, { children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E" })) }) })));
};
