import styled from 'styled-components'

export const SearchSectionWrapper = styled.div`
	display: flex;
	width: 850px;
	height: 66px;
	border: 1px solid #ddd;
	border-radius: 32px;
	background-color: #fff;

	.item {
		display: flex;
		align-items: center;
		flex: 1;
		border-radius: 32px;

		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			padding: 0 30px;

			.title {
				font-size: 12px;
				font-weight: 800;
				color: #222;
			}

			.desc {
				font-size: 14px;
				color: #666;
			}
		}

		.divider {
			height: 32px;
			width: 1px;
			background-color: #ddd;
		}

		&:hover {
			background-color: #eee;
		}
	}
`
