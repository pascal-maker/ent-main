# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add index comments_article_id_idx to comments

Revision ID: b19aa50fcab3
Revises: 5ef195f3dacf
Create Date: 2021-11-18 22:47:01.430506+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = 'b19aa50fcab3'
down_revision = '5ef195f3dacf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index('comments_article_id_idx', 'comments',
                    ['article_id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('comments_article_id_idx', table_name='comments')
    # ### end Alembic commands ###
