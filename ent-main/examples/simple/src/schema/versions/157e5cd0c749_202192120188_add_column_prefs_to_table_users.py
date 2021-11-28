# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add column prefs to table users

Revision ID: 157e5cd0c749
Revises: 60bd13ef0d6e
Create Date: 2021-09-21 20:18:08.211531+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '157e5cd0c749'
down_revision = '60bd13ef0d6e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column(
        'prefs', postgresql.JSONB(astext_type=sa.Text()), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'prefs')
    # ### end Alembic commands ###
