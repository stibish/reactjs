import React from 'react';

const Item = () => {
	return (
		<div className="container py-3">
			<main>
				<div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 text-center justify-content-center">
					<div className="col py-3">
						<div className="card md-6 rounded">
							<div className="card-header">
								<p>Спа отель Вершина</p>
								<img
									className="rounded"
									src="img/1.jpg"
									width={'85%'}
									alt=""></img>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Item;
