.PHONY: setup dev run

NOTION_PAGE_ID := 2abd4f6b67b18101973fd26ed97e06bf
setup:
	docker run -it --rm -v ${PWD}:/app node /bin/bash -c "yarn install" ; \
	echo NOTION_PAGE_ID=$(NOTION_PAGE_ID) > .env.local

dev:
	docker build -f Dockerfile.dev . -t morethan-log-dev ; \
	docker run -it --rm -p 3000:3000 -v ${PWD}:/app morethan-log-dev 

run:
	docker build -f Dockerfile.prod . -t morethan-log-prod ; \
	docker run -it --rm -p 8001:3000 morethan-log-prod


