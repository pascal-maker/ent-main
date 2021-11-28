# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add addresses table

Revision ID: c51c521d5401
Revises: 611a2f3c6b31
Create Date: 2021-01-12 20:32:58.517602+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'c51c521d5401'
down_revision = '611a2f3c6b31'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('addresses',
                    sa.Column('id', postgresql.UUID(), nullable=False),
                    sa.Column('created_at', sa.TIMESTAMP(), nullable=False),
                    sa.Column('updated_at', sa.TIMESTAMP(), nullable=False),
                    sa.Column('street', sa.Text(), nullable=False),
                    sa.Column('city', sa.Text(), nullable=False),
                    sa.Column('state', sa.Text(), nullable=False),
                    sa.Column('zip_code', sa.Text(), nullable=False),
                    sa.Column('apartment', sa.Text(), nullable=True),
                    sa.Column('owner_id', postgresql.UUID(), nullable=False),
                    sa.Column('owner_type', sa.Text(), nullable=False),
                    sa.PrimaryKeyConstraint('id', name='addresses_id_pkey'),
                    sa.UniqueConstraint(
                        'owner_id', name='addresses_unique_owner_id')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('addresses')
    # ### end Alembic commands ###