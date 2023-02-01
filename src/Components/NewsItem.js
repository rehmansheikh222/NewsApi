import React from "react";

const NewsItem =(props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0px'
                    }}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img
                        src={
                            imageUrl
                                ? imageUrl
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaODaxcfLFUb8S57BkJLhlwovTuG4LbrxMiw&usqp=CAU"
                        }
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {author ? author : "Unknown"} on{" "}
                                {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a
                            rel="noreferrer"
                            href={newsUrl}
                            target="_blank"
                            className="btn-sm btn btn-dark"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    
}

export default NewsItem;
