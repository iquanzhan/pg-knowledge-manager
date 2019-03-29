package entity;

/**
 * @ClassName: CodeMsg
 * @description:
 * @author: Cheng XiaoXiao  (🍊 ^_^ ^_^)
 * @Date: 2019-03-29
 */
public class CodeMsg {
    private int code;
    private String msg;


    public static CodeMsg ERROR = new CodeMsg(0, "success");
    public static CodeMsg SERER_ERROR = new CodeMsg(500100, "服务器端异常：%s");
    public static CodeMsg BIND_ERROR = new CodeMsg(500101, "参数校验异常：%s");


    public CodeMsg(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    /**
     * 添加带参数的异常处理
     *
     * @param obj
     * @return
     */
    public CodeMsg fillArgs(Object... obj) {
        String message = String.format(msg, obj);
        return new CodeMsg(this.code, message);
    }


}
