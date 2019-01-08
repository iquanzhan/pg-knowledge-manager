export default {
    formateDate(time) {
        if (!time) {
            return '';
        }

        let date = new Date(time);

        let year = date.getFullYear();
        let month = this.appendZero(date.getMonth() + 1);
        let days = this.appendZero(date.getDate());

        let hour = this.appendZero(date.getHours());
        let minutes = this.appendZero(date.getMinutes());
        let seconds = this.appendZero(date.getSeconds());

        return year + "-" + month + "-" + days + " " + hour + ":" + minutes + ":" + seconds;
    },
    appendZero(num) {
        if (num < 10) return '0' + num;
        return num;
    },

    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current);
            },
            current:data.page,
            pageSize:data.page_size,
            total:data.total_count,
            showTotal:()=>{
                return `总共${data.total_count}条数据`;
            },
            showQuickJumper: true
        };
    }

};

